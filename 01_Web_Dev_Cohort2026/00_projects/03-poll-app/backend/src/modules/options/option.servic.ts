import { db } from "../../common/config/db.js";
import { optionTable } from "../../db/schema/option.js";

export class OptionService {

  
  static async addOption(pollId: string, text: string) {
    const [option] = await db.insert(optionTable)
      .values({
        pollId,
        text,
      })
      .returning();

    return option;
  }

 
  static async getOptionsByPoll(pollId: string) {
    return db.query.optionTable.findMany({
      where: (opt, { eq }) => eq(opt.pollId, pollId),
    });
  }
}