import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';
import {
  AddNoticeStepTwoImg,
  AddNoticeStepTwoButtonDelImg,
  AddNoticeStepTwoSlide,
  AddNoticeStepTwoSliderContainer,
} from './AddNoticeStepTwo.styled';
export const AddNoticeStepTwoDragDropContext = ({formik, preview, setPreview}) => {
  const deleteImage = index => {
    // create a copy of the preview array
    const updatedPreview = [...preview];
    // remove the image at the specified index
    updatedPreview.splice(index, 1);
    // update the preview state and localStorage
    setPreview(updatedPreview);
    localStorage.setItem('preview', JSON.stringify(updatedPreview));
    let updatedPhotoUrl = [...formik.values.photoUrl];
    updatedPhotoUrl.splice(index, 1);
    formik.setFieldValue('photoUrl', updatedPhotoUrl);
    formik.validateField('photoUrl');
  };
  const handleOnDragEnd = result => {
    if (!result.destination) return;
    const items = Array.from(preview);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPreview(items);
  };
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  }
  const { width } = useWindowSize();
  const isScreenSmall = width <= 767;
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable
        droppableId="slider"
        direction={isScreenSmall ? 'vertical' : 'horizontal'}
      >
        {(provided, snapshot) => (
          <AddNoticeStepTwoSliderContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {preview.map((url, index) => (
              <Draggable key={index} draggableId={`${index}`} index={index}>
                {(provided, snapshot) => (
                  <AddNoticeStepTwoSlide
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <AddNoticeStepTwoButtonDelImg
                      type="button"
                      onClick={() => deleteImage(index)}
                    />
                    <AddNoticeStepTwoImg src={url} alt={`Slide ${index}`} />
                  </AddNoticeStepTwoSlide>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </AddNoticeStepTwoSliderContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};
