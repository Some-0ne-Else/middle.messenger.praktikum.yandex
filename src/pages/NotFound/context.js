import { Link } from '../../components/Link';

const chatLink = {
  class: "not-found__link",
  href: "#",
  text: "Назад к чатам"
}

export const notFoundContext = {
  chatLink: Link(chatLink),
}
