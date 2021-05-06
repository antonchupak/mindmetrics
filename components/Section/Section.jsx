import React from 'react';
import clsx from 'clsx';
import Button from "../Button/Button";
import styles from "./Section.module.sass"

const Section = ({
 title,
 text,
 buttonText,
 imageContent,
 isReverse = false,
 isGrey = false,
 onButtonClick,
}) => {
  const containerClass = clsx(styles.section, {
    [styles.withImage]: Boolean(imageContent),
    [styles.reverse]: isReverse,
    [styles.grey]: isGrey,
  });

  const renderTextContent = () => {
    const isShowTitle = Boolean(title);
    const isShowText = Boolean(text);
    const isShowButton = Boolean(buttonText && onButtonClick);

    return (
      <div className={styles.textContent}>
        <div className={styles.textContentWrap}>
          {isShowTitle ? (
            <h1 className={styles.title}>{title}</h1>
          ) : null}

          {isShowText ? (<p className={styles.description}>{text}</p>) : null}

          {isShowButton ? (
            <Button onClick={onButtonClick}>
              {buttonText}
            </Button>
          ) : null}
        </div>
      </div>
    );
  };

  const renderImageContent = () => {
    const ImageContent = imageContent;

    return (
      <div className={styles.imageContent}>
        {<ImageContent />}
      </div>
    )
  };

  return (
    <div className={containerClass}>
      <div className={styles.containerWrap}>
        {renderTextContent()}
        {imageContent ? renderImageContent() : null}
      </div>
    </div>
  );
};

export default Section;