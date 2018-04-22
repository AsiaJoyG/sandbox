/*
   Remove Duplicates Tests

   Hi! Don't worry about this for now!

*/

import { removeDuplicates, removeDuplicateCharacters } from "./remove-duplicates";

test("removeDuplicates", () => {
   expect(removeDuplicates([1,2,2,3,3,4,5])).toEqual([1,2,3,4,5]);
   expect(removeDuplicates([1,1,1,2,2,3,3,4,5,5,5,5])).toEqual([1,2,3,4,5]);
});

test("removeDuplicateCharacters", () => {
   expect(removeDuplicateCharacters("aardvaark")).toBe("ardvark")
});