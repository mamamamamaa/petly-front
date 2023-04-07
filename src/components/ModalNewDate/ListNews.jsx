import {
  Ul,
  Li,
  Box,
  ColorBox,
  Header,
  Paragraph,
  Wraper,
  DateBox,
  BoxHref,
} from './ListNews.styled';
import NewsNewDateSecond from '../../utils/NewsNewDate/NewsNewDate';
import { FormattedMessage } from 'react-intl';

// ======== second way for news ========= down
function ListNews({ news }) {
  // console.log(news);
  return (
    <Ul>
      {news.map(item => (
        <Li key={item.publishedAt}>
          <Box>
            <ColorBox></ColorBox>
            <Header>{item.title}</Header>
            <Paragraph>{item.description}</Paragraph>
            <Wraper>
              <DateBox>
                <NewsNewDateSecond date={item.publishedAt} />
                {/* <NewsNewDate date={dateOfBirth} /> */}
              </DateBox>
              <BoxHref
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage id=""/>
              </BoxHref>
            </Wraper>
          </Box>
        </Li>
      ))}
    </Ul>
  );
}
// ======== second way for news ========= up
// function ListNews({ news }) {
//   return (
//     <Ul>
//       {news.map(item => (
//         <Li key={item.id}>
//           <Box>
//             <ColorBox></ColorBox>
//             <Header>{item.title}</Header>
//             <Paragraph>{item.body}</Paragraph>
//             <Wraper>
//               <DateBox>
//                 <NewsNewDate date={item.datePublished} />
//               </DateBox>
//               <BoxHref
//                 href={item.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Read more
//               </BoxHref>
//             </Wraper>
//           </Box>
//         </Li>
//       ))}
//     </Ul>
//   );
// }

export default ListNews;
