async function getChefBirthday(id) {
  try {
    const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);
    const userId = recipe.userId;
    const user = await fetchJson(`https://dummyjson.com/users/${userId}`);
    const birthDate = user.birthDate;

    return birthDate;
  } catch (error) {
    console.log(error);
  }
}

async function fetchJson(url) {
  const response = await fetch(url);
  const obj = await response.json();
  return obj;
}

(async () => {
  try {
    const birthDate = await getChefBirthday(1);
    console.log("compleanno dello chef:", birthDate);
  } catch (error) {
    console.log(error);
  }
})();
