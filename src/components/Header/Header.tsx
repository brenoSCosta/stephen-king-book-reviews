import * as S from './styles';
import SKing from '../../../public/assets/images/sking.png';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <S.Container>
        <S.HeaderDescription>
          <S.HeaderDescriptionTitle>Stephen King</S.HeaderDescriptionTitle>
          <S.HeaderDescriptionText>
            Explore conosco os livros de Stephen King! De clássicos do terror a histórias menos
            conhecidas, oferecemos análises breves e perspicazes para os fãs dedicados e os novatos
            curiosos. Venha descobrir os arrepios que só King sabe proporcionar!
          </S.HeaderDescriptionText>
        </S.HeaderDescription>
        <S.ImageContainer>
          <Image src={SKing} alt='Stephen king photo' style={S.imageStyle} />
        </S.ImageContainer>
      </S.Container>
    </>
  );
};

export default Header;
