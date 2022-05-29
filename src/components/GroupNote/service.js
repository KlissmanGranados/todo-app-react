import { faker } from '@faker-js/faker';

export function all() {

    const NOTES_GROUP_QUANTITY = 6;
    const NOTES_QUANTITY = 25;
    const groupNotes = [];

    for (let noteGroup = 1; noteGroup <= NOTES_GROUP_QUANTITY; noteGroup++) {

        const title = faker.name.jobTitle();
        const tasks = [];

        for (let note = 1; note <= NOTES_QUANTITY; note++) {
            tasks.push({
                id: note,
                message: faker.lorem.words()
            });
        }

        groupNotes.push({ id: noteGroup, title, tasks });

    }

    return groupNotes;

}