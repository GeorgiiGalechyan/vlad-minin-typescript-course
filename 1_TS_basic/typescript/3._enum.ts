// Пример № 1

enum Membership {
  Simple, // 0
  Standart, // 1
  Premium, // 2
}

const membership = Membership.Standart // console.log(membership) - покажет 1
const membershipReverse = Membership[2] // console.log(membershipReverse) - покажет Premium

// Пример № 2

enum SocialMedia {
  VK = `VK`,
  FACEBOOK = `FACEBOOK`,
  INSTAGRAM = `INSTAGRAM`,
}

const social = SocialMedia.INSTAGRAM // console.log(social) - покажет INSTAGRAM (т.к. есть значение)
