export const workWearParams = {
  category: [
    "Рабочая",
    "Влагозащитная",
    "От повышенных температур",
    "Для сферы услуг",
    "Трикотаж и головные уборы",
  ],
  season: ["Летний", "Зимний"],
  gender: ["Мужской", "Женский"],
  checkParams: function (category, season, gender) {
    if (this.category.includes(category) === false) {
      return false;
    }
    if (this.season.includes(season) === false) {
      return false;
    }
    if (this.gender.includes(gender) === false) {
      return false;
    }
    return true;
  },
};

export const shoesParams = {
  category: ["Повседневная", "Теромстойкая", "Влагостойкая"],
  season: ["Летний", "Зимний"],
  gender: ["Мужской", "Женский"],
  checkParams: function (category, season, gender) {
    if (this.category.includes(category) === false) {
      return false;
    }
    if (this.season.includes(season) === false) {
      return false;
    }
    if (this.gender.includes(gender) === false) {
      return false;
    }
    return true;
  },
};

export const glovesParams = {
  category: [
    "Трикотажные",
    "От пониженных температур",
    "Рукавицы / Вачеги",
    "От механических воздействий",
    "Краги",
    "Спилковые",
  ],
  checkParams: function (category) {
    if (this.category.includes(category) === false) {
      return false;
    } 

    return true;
  },
};

export const ppeParams = {
  category: [
    "Защита головы",
    "Защита глаз и лица",
    "Защита органов дыхания",
    "Защита органов слуха",
    "При высотных работах",
    "Диэлектрические",
    "Дерматологические",
  ],
  checkParams: function (category) {
    if (this.category.includes(category) === false) {
      return false;
    }

    return true;
  },
};
