const form = document.getElementById('form');

const axiosUpdate = async (id, data) => {
  try {
    const url = `http://127.0.0.1:3000/api/v1/posts/${id}`;

    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      console.log(res.data);
    }
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener('submit', e => {
  const id = document.getElementById('_id').value;
  const urlMediaOld = document.getElementById('old_pic').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const status = document.getElementById('status').value;
  const photo = document.getElementById('photo').files[0];

  e.preventDefault();

  console.log(urlMediaOld);

  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('status', status);
  formData.append('urlMediaOld', urlMediaOld);
  formData.append('photo', photo);

  axiosUpdate(id, formData);
});
