import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import LanguageContext from '../../LanguageContext';

const Div = styled.div`
    margin-bottom: ${props => !props.inline && '20px'};
    position: relative;
    overflow: hidden;

    line-height: ${props => !props.inline && '1.7rem'};
    color: transparent;
    word-break: break-word;

    &:first-child {
        align-self: start;
    }

    a {
        color: inherit;
    }
`;

const OuterSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.7s ease;
    transform: translateX(${props => -props.translate}%);
    overflow: hidden;

    color: #000000;
`;

const InnerSpan = styled.span`
    display: inline-block;
    transform: translateX(${props => props.translate}%);
    transition: transform 0.7s ease;

    a {
        color: #000000;
    }

    ol {
        li {
            position: relative;
            padding-left: 30px;

            &::before {
                content: '';
                position: absolute;
                left: 5px;
                top: 12px;
                width: 10px;
                height: 1px;

                background-color: #000000;
            }
        }
    }
`;

const TextContent = ({ content, marker, inline }) => {
    const [translate, setTranslate] = useState(100);
    const lang = useContext(LanguageContext);

    useEffect(() => {
        setTimeout(() => setTranslate(0), 1200);
    }, []);

    return (
        <>
            {content[lang].map((item, index) => {
                return (
                    <Div key={index} inline={inline}>
                        {marker && marker + '. '}
                        {item}
                        <OuterSpan translate={translate}>
                            <InnerSpan aria-hidden='true' translate={translate}>
                                {marker && marker + '. '}
                                {item}
                            </InnerSpan>
                        </OuterSpan>
                    </Div>
                );
            })}
        </>
    );
};

export default TextContent;
