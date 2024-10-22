/**
 * Flash Data Library
 */

export async function fetchFlashCardStatus() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Success');
    }, 3000);
  });
};
