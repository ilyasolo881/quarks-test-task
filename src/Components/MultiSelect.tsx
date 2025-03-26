import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import styles from "../style/components/MultiSelect.module.scss";

import { optionsList, optionsListTypes } from "../data/optionsList";

interface SelectedOptions {
  [key: number]: string[];
}

export const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [page, setPage] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const navigate = useNavigate();

  const currentQuestion: optionsListTypes = optionsList[page];

  useEffect(() => {
    setIsDisabled(!(selectedOptions[page] && selectedOptions[page].length > 0));
  }, [page, selectedOptions]);

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) => {
      const currentSelections = prev[page] || [];
      const updatedSelections = currentSelections.includes(option)
        ? currentSelections.filter((item) => item !== option)
        : [...currentSelections, option];
      return { ...prev, [page]: updatedSelections };
    });
  };

  const handleNext = () => {
    if (!isDisabled) {
      if (page + 1 === optionsList.length) {
        navigate("/email");
      } else {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.header__title}>{currentQuestion.question}</h3>
        <h4 className={styles.header__text}>Select all that apply</h4>
      </div>

      <div className={styles.optionsList}>
        {currentQuestion.options.map((option, index) => (
          <label
            key={option}
            className={cn(styles.option, {
              [styles.option_selected]: selectedOptions[page]?.includes(option),
            })}
            onClick={() => toggleOption(option)}
          >
            <div className={styles.option__text}>
              {currentQuestion.emojis[index]} {option}
            </div>
            <input
              type="checkbox"
              checked={selectedOptions[page]?.includes(option)}
              onChange={() => toggleOption(option)}
              className={styles.option__checkbox}
            />
          </label>
        ))}

        <div className={styles.navigation}>
          <button
            className={styles.button}
            disabled={page === 0}
            onClick={handlePrevious}
          >
            Back
          </button>

          <span>
            {page + 1}/{optionsList.length}
          </span>

          <button
            className={styles.button}
            disabled={isDisabled}
            onClick={handleNext}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
