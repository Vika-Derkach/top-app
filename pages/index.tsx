import { useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";
import { Layout } from "../layout/Layout";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
      <Htag tag="h1">text</Htag>
      <Button appearance="primary" arrow="right">
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
    </Layout>
  );
}
