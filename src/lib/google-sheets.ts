import { google } from 'googleapis';

// Google Sheets configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || 'Portfolio Data';

// Initialize Google Sheets API
const getGoogleSheets = () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  return google.sheets({ version: 'v4', auth });
};

// Fetch portfolio data from Google Sheets
export async function getPortfolioData() {
  try {
    const sheets = getGoogleSheets();
    
    // Fetch current holdings data
    const holdingsResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A2:H`, // Assuming data starts from row 2
    });

    const holdings = holdingsResponse.data.values?.map((row: string[]) => ({
      symbol: row[0],
      name: row[1],
      shares: parseInt(row[2]) || 0,
      price: parseFloat(row[3]) || 0,
      value: parseFloat(row[4]) || 0,
      change: parseFloat(row[5]) || 0,
      changePercent: parseFloat(row[6]) || 0,
      quarter: row[7] || 'Q4 2024',
    })) || [];

    // Fetch quarterly performance data
    const quarterlyResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!J2:P`, // Quarterly data in different columns
    });

    const quarterlyData = quarterlyResponse.data.values?.map((row: string[]) => ({
      quarter: row[0],
      investment: parseFloat(row[1]) || 0,
      return: parseFloat(row[2]) || 0,
      returnPercent: parseFloat(row[3]) || 0,
      status: row[4] || 'completed',
      topPick: row[5] || '',
      worstPick: row[6] || '',
    })) || [];

    // Fetch summary metrics
    const summaryResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!R2:U2`, // Summary row
    });

    const summary = summaryResponse.data.values?.[0] || [];
    const initialCapital = parseFloat(summary[0]) || 1000000;
    const currentValue = parseFloat(summary[1]) || 1470000;
    const totalReturn = parseFloat(summary[2]) || 47.0;
    const winRate = parseFloat(summary[3]) || 75;

    return {
      holdings,
      quarterlyData,
      summary: {
        initialCapital,
        currentValue,
        totalReturn,
        winRate,
      },
    };
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    // Return fallback data if Google Sheets fails
    return getFallbackData();
  }
}

// Fallback data in case Google Sheets is not configured
function getFallbackData() {
  return {
    holdings: [
      { symbol: "RELIANCE", name: "Reliance Industries", shares: 50, price: 2500.00, value: 125000.00, change: 18.5, changePercent: 18.5, quarter: "Q4 2024" },
      { symbol: "TCS", name: "Tata Consultancy Services", shares: 30, price: 3266.67, value: 98000.00, change: 15.2, changePercent: 15.2, quarter: "Q4 2024" },
      { symbol: "INFOSYS", name: "Infosys Limited", shares: 40, price: 2225.00, value: 89000.00, change: 12.8, changePercent: 12.8, quarter: "Q4 2024" },
      { symbol: "HDFC", name: "HDFC Bank", shares: 25, price: 1600.00, value: 40000.00, change: 8.3, changePercent: 8.3, quarter: "Q4 2024" },
      { symbol: "ICICIBANK", name: "ICICI Bank", shares: 35, price: 1142.86, value: 40000.00, change: 6.7, changePercent: 6.7, quarter: "Q4 2024" },
      { symbol: "SUNPHARMA", name: "Sun Pharma", shares: 20, price: 1200.00, value: 24000.00, change: 4.2, changePercent: 4.2, quarter: "Q4 2024" },
    ],
    quarterlyData: [
      { quarter: "Q4 2024", investment: 1000000, return: 125000, returnPercent: 12.5, status: "active", topPick: "RELIANCE", worstPick: "SUNPHARMA" },
      { quarter: "Q3 2024", investment: 1000000, return: 82000, returnPercent: 8.2, status: "completed", topPick: "TCS", worstPick: "ICICIBANK" },
      { quarter: "Q2 2024", investment: 1000000, return: -21000, returnPercent: -2.1, status: "completed", topPick: "INFOSYS", worstPick: "HDFC" },
      { quarter: "Q1 2024", investment: 1000000, return: 158000, returnPercent: 15.8, status: "completed", topPick: "RELIANCE", worstPick: "SUNPHARMA" },
    ],
    summary: {
      initialCapital: 1000000,
      currentValue: 1470000,
      totalReturn: 47.0,
      winRate: 75,
    },
  };
}

// Create environment variables template
export function createEnvTemplate() {
  return `
# Google Sheets Integration
GOOGLE_SHEET_ID=your_spreadsheet_id_here
GOOGLE_SHEET_NAME=Portfolio Data
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\nYour private key here\\n-----END PRIVATE KEY-----\\n"
`;
}
