import Link from '../../components/Link';

const chatLink = {
  className: 'internal-error__link',
  href: '#',
  text: 'Назад к чатам',
};

const internalErrorContext = {
  chatLink: Link(chatLink),
};

export default internalErrorContext;
