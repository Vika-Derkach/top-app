import { GetStaticProps } from "next";
import { useState } from "react";
import { api } from "../api/api";
import {
  Button,
  Htag,
  Input,
  Paragraph,
  Rating,
  Tag,
  Textarea,
} from "../components";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../layout/Layout";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">text</Htag>
      <Button appearance="primary" arrow="right">
        jijiji
      </Button>
      <Button appearance="ghost" arrow="right">
        jijiji
      </Button>
      <Input placeholder="nane" />
      <Textarea
        placeholder="Текст отзыва"
        rows={3}
        cols={20}
        spellCheck={true}
        maxLength={10}
      />
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

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const menu = await api<MenuItem[]>("menu");

  return {
    props: { menu, firstCategory },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
