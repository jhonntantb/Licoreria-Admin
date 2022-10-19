const apiUrl = 'http://localhost:8080/api'; // 'https://pame-backend.herokuapp.com/api';

export const userValidate = async (userInfo) => {
  console.log(userInfo);
  const res = await fetch(`${apiUrl}/user/validate`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
  const user = await res.json();
  return user;
};
