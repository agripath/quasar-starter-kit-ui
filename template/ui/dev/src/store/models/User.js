import { UserDynamic } from '@agripath/orm-classes'

export default class User extends UserDynamic {
  static relationships = [
    'farms',
  ]
}
