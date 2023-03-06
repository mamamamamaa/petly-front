export const handleImageLoad = async (setPreview, formik, event ) => {
  const files = event.currentTarget.files; // get all selected files
  const fileArray = [];

  for (let i = 0; i < files.length; i++) {
    if (i === 5) {
      break;
    }
    const reader = new FileReader();
    fileArray.push(
      new Promise(resolve => {
        reader.onload = () => resolve(reader.result);
      })
    );
    reader.readAsDataURL(files[i]);
    formik.setFieldValue(`photoUrl[${i}]`, files[i]);
  }

  const loadedFiles = await Promise.all(fileArray);
  setPreview(loadedFiles);
  localStorage.setItem('preview', JSON.stringify(loadedFiles));
  formik.validateField('photoUrl');
};
export const restorePreview = setPreview => {
  // retrieve the image URLs from localStorage
  const storedPreview = localStorage.getItem('preview');
  if (storedPreview) {
    setPreview(JSON.parse(storedPreview));
  }
};
