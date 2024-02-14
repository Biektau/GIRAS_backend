import { WorkWear } from "../models/workWearModel.js";
import { getDateInFormat } from "../utils/dateFormat.js";
import { workWearParams } from "../utils/validParams.js";

export async function createWorkWear(request, response) {
  try {
    if (
      workWearParams.checkParams(
        request.body.category,
        request.body.season,
        request.body.gender
      )
    ) {
      const newWorkWear = {
        name: request.body.name || "Пусто",
        price: request.body.price || "Пусто",
        color: request.body.color || "Пусто",
        standard: request.body.standard || "Пусто",
        set: request.body.set || "Пусто",
        series: request.body.series || "Пусто",
        protectionClass: request.body.protectionClass || "Пусто",
        material: request.body.material || "Пусто",
        veryfied: request.body.veryfied || "Пусто",
        sizes: request.body.sizes || "Пусто",
        heights: request.body.heights || "Пусто",
        averageVolume: request.body.averageVolume || "Пусто",
        averageWeight: request.body.averageWeight || "Пусто",
        packing: request.body.packing || "Пусто",
        category: request.body.category,
        season: request.body.season,
        gender: request.body.gender,
        mainImg: request.body.mainImg || "Пусто",
        allImages: request.body.allImages || [],
        date: getDateInFormat(),
      };

      const workWear = await WorkWear.create(newWorkWear);

      return response.status(200).send({
        message: "Спецодежда успешно добавлена",
        workWear,
      });
    } else {
      return response.status(400).send({
        message: "Не валидные значения полей (категория, сезон или пол)",
      });
    }
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
export async function getWorkWear(request, response) {
  try {
    const workWears = await WorkWear.find({});
    return response.status(200).json(workWears);
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
export async function getOneWorkWear(request, response) {
  try {
    const { id } = request.params;
    const workWear = await WorkWear.findById(id);
    if (!workWear) {
      return response.status(400).send({
        message: "Спецодежда не найдена",
      });
    }
    return response.status(200).json(workWear);
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
export async function updateWorkWear(request, response) {
  try {
    if (
      workWearParams.checkParams(
        request.body.category,
        request.body.season,
        request.body.gender
      )
    ) {
      const { id } = request.params;
      const result = await WorkWear.findByIdAndUpdate(id, request.body);
      if (!result) {
        return response.status(400).send({
          message: "Спецодежда не найдена",
        });
      }
      return response.status(200).send({
        message: "Изменение произошло успешно!",
        result,
      });
    } else {
      return response.status(400).send({
        message: "Не валидные значения полей (категория, сезон или пол)",
      });
    }
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
export async function deleteWorkWear(request, response) {
  try {
    const { id } = request.params;
    const result = await WorkWear.findByIdAndDelete(id);
    if (!result) {
      return response.status(400).send({
        message: "Спецодежда не найдена",
      });
    }
    return response.status(200).send({
      message: "Удаление прошло успешно!",
    });
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
