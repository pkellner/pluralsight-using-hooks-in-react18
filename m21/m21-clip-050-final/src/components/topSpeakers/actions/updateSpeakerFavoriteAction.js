'use server';

import path from "path";
import fs from "fs";
import { promisify } from "util";

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function updateSpeakerFavoriteAction(
  previousState,
  formData
) {
  try {
    await delay(3000);

    const speakerDataString = formData.get('speakerData');
    const speaker = JSON.parse(speakerDataString);
    console.log("/api/speakers/[id] updateSpeakerFavoriteAction speaker passed in to update:", speaker);

    const speakerRecordUpdated = {...speaker, favorite: !speaker.favorite};

    const jsonFile = path.resolve("./", "db.json");

    async function getSpeakersData() {
      const readFileData = await readFile(jsonFile);
      return JSON.parse(readFileData.toString()).speakers;
    }

    const speakers = await getSpeakersData();

    const newSpeakersArray = speakers.map(function (record) {
      return record.id === speaker.id ? speakerRecordUpdated : record;
    });

    await writeFile(
      jsonFile,
      JSON.stringify(
        {
          speakers: newSpeakersArray,
        },
        null,
        2,
      ),
    );

    console.log(`Server Action: Updated speaker ${speaker.id} favorite status to ${!speaker.favorite}`);

    return {
      success: true,
      speaker: speakerRecordUpdated,
    };
  } catch (error) {
    console.error("Error updating speaker:", error);
    return {
      success: false,
      error: "Failed to update speaker favorite status",
    };
  }
}