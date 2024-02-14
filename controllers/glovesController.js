import { Gloves } from "../models/glovesModel.js";
import { getDateInFormat } from "../utils/dateFormat.js";
import { glovesParams } from "../utils/validParams.js";

export async function createGloves(request, response) {
  try {
    if (glovesParams.checkParams(request.body.category)) {
      const newGloves = {
        name: request.body.name || "Пусто",
        price: request.body.price || "Пусто",
        color: request.body.color || "Пусто",
        standard: request.body.standard || "Пусто",
        material: request.body.material || "Пусто",
        base: request.body.base || "Пусто",
        coating: request.body.coating || "Пусто",
        cuff: request.body.cuff || "Пусто",
        sizes: request.body.sizes || "Пусто",
        averageVolume: request.body.averageVolume || "Пусто",
        averageWeight: request.body.averageWeight || "Пусто",
        packing: request.body.packing || "Пусто",
        category: request.body.category,
        mainImg: request.body.mainImg || "Пусто",
        allImages: request.body.allImages || [],
        date: getDateInFormat(),
      };

      const gloves = await Gloves.create(newGloves);

      return response.status(200).send({
        message: "Перчатки успешно добавлены",
        gloves,
      });
    } else {
      return response.status(400).send({
        message: "Не валидные значения полей (категория)",
      });
    }
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
export async function getGloves(request, response) {
  try {
    const gloves = await Gloves.find({});
    return response.status(200).json(gloves);
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
export async function getOneGloves(request, response) {
  try {
    const { id } = request.params;
    const gloves = await Gloves.findById(id);
    if (!gloves) {
      return response.status(400).send({
        message: "Перчатки не найдены",
      });
    }
    return response.status(200).json(gloves);
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
export async function updateGloves(request, response) {
  try {
    if (glovesParams.checkParams(request.body.category)) {
      const { id } = request.params;
      const result = await Gloves.findByIdAndUpdate(id, request.body);
      if (!result) {
        return response.status(400).send({
          message: "Перчатки не найдены",
        });
      }
      return response.status(200).send({
        message: "Изменение произошло успешно!",
        result,
      });
    } else {
      return response.status(400).send({
        message: "Не валидные значения полей (категория)",
      });
    }
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
export async function deleteGloves(request, response) {
  try {
    const { id } = request.params;
    const result = await Gloves.findByIdAndDelete(id);
    if (!result) {
      return response.status(400).send({
        message: "Перчатки не найдены",
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
