import styled, {css} from 'styled-components';


const commonWidth = css`
    width: 23%;
`;

export const CheckOutItemHolder = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainerHolder = styled.div`
    ${ commonWidth }
    padding-right: 15px;

    img {
    width: 100%;
    height: 100%;
    }
`;

export const CheckOutName = styled.div`
    ${ commonWidth }
`;

export const CheckOutQuantityHolder = styled.div`
    ${ commonWidth }
    display: flex;
    .arrow {
      cursor: pointer;
    }
    .value {
      margin: 0 10px;
    }
`;

export const CheckOutPrice = styled.div`
    ${ commonWidth }
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;

