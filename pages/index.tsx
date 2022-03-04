import { useEffect, useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("counter" + counter);

    return function cleanUp() {
      console.log("unmount");
    };
  }, [counter]);

  useEffect(() => {
    if (counter) {
      console.log("Mounted");
    }
  }, []);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        jijiji
      </Button>
      <Button appearance="ghost" arrow="right">
        jijiji
      </Button>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <Paragraph size="l">
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </Paragraph>
      <Paragraph>
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </Paragraph>
      <Paragraph size="s">
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </Paragraph>

      <Tag size="s" color="red">
        tag
      </Tag>
      <Tag size="m" color="green">
        tag
      </Tag>
      <Tag size="m" color="ghost">
        tag
      </Tag>
      <Tag size="m" color="gray">
        tag
      </Tag>
      <Tag size="m" color="primary">
        tag
      </Tag>
    </>
  );
}
