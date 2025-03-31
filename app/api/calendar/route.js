import { google } from "googleapis";
import path from "path";

// Load Google service account credentials
const keyPath = path.join(process.cwd(), "service-account.json");

const auth = new google.auth.GoogleAuth({
  keyFile: keyPath,
  scopes: ["https://www.googleapis.com/auth/calendar.events"],
});

// Function to create a test event
async function createTestEvent() {
  try {
    const calendar = google.calendar({ version: "v3", auth });

    const event = {
      summary: "Test Meeting",
      description:
        "This is a test meeting created using the Google Calendar API.",
      start: {
        dateTime: "2025-03-10T10:00:00-04:00", // Update the date & time
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2025-03-10T11:00:00-04:00",
        timeZone: "America/New_York",
      },
      attendees: [
        { email: "angryred027@gmail.com" },
        { email: "angryred2001@gmail.com" },
      ],
      reminders: { useDefault: true },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
      sendUpdates: "all", // Sends email invites
    });

    console.log("✅ Event created successfully:", response.data.htmlLink);
  } catch (error) {
    console.error("❌ Error creating event:", error.message);
  }
}

// Run the function
createTestEvent();
