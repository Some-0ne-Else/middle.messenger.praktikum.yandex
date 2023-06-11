import { ProfileInput } from '../../components/ProfileInput';

import backImageUrl from '../../static/arrow_back.png'
import emptyAvatarUrl from '../../static/empty_avatar.png';

const profileEmail = {
className: '',
  name: 'email',
  type: 'email',
  label: 'Почта',
  disabled: 'disabled',
  value:'pochta@yandex.ru'
}

export  const profileContext = {
 profileEmail: ProfileInput(profileEmail),
 backImageUrl:backImageUrl,
 emptyAvatarUrl: emptyAvatarUrl
}
