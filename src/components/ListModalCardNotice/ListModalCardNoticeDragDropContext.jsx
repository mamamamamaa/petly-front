import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import noPoster from 'noPoster.jpg';
import { useState } from 'react';
import {
  Img,
  BigImg,
  DragDropContextContainer,
} from './ListModalCardNotice.styled';

export const ListModalCardNoticeDragDropContext = ({ photoUrl }) => {
  const [preview, setPreview] = useState(photoUrl);
  const [headPhoto, setHeadPhoto] = useState(preview[0]);
  const handleOnDragEnd = result => {
    if (!result.destination) return;
    const items = Array.from(preview);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPreview(items);
  };

  const handleImgClick = index => {
    setHeadPhoto(preview[index]);
  };

  return (
    <DragDropContextContainer>
      {headPhoto ? (
        <BigImg src={headPhoto} alt="Preview" />
      ) : (
        <BigImg src={noPoster} alt="Preview" />
      )}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="photos">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {preview.length > 1 &&
                preview.map((element, index) => (
                  <Draggable
                    key={index}
                    draggableId={`photo-${index}`}
                    index={index}
                  >
                    {provided => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Img
                          src={element}
                          alt={`Pet slide ${index}`}
                          onClick={() => handleImgClick(index)}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </DragDropContextContainer>
  );
};
