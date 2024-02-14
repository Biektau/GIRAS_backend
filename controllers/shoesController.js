import { Shoes } from "../models/shoesModel.js";
import { getDateInFormat } from "../utils/dateFormat.js";
import { shoesParams } from "../utils/validParams.js";

export async function createShoes(request, response) {
  try {
    if (
      shoesParams.checkParams(
        request.body.category,
        request.body.season,
        request.body.gender
      )
    ) {
      const newShoes = {
        name: request.body.name || "Пусто",
        price: request.body.price || "Пусто",
        color: request.body.color || "Пусто",
        standard: request.body.standard || "Пусто",
        material: request.body.material || "Пусто",
        pad: request.body.pad || "Пусто",
        toeCap: request.body.toeCap || "Пусто",
        insole: request.body.insole || "Пусто",
        sole: request.body.sole || "Пусто",
        fasteningMethod: request.body.fasteningMethod || "Пусто",
        sizes: request.body.sizes || "Пусто",
        mainImg: request.body.mainImg || "Пусто",
        averageVolume: request.body.averageVolume || "Пусто",
        averageWeight: request.body.averageWeight || "Пусто",
        packing: request.body.packing || "Пусто",
        category: request.body.category,
        season: request.body.season,
        gender: request.body.gender,
        allImages: request.body.allImages || [],
        date: getDateInFormat(),
      };

      const shoes = await Shoes.create(newShoes);

      return response.status(200).send({
        message: "Обувь успешно добавлена",
        shoes,
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
export async function getShoes(request, response) {
  try {
    const shoes = await Shoes.find({});
    return response.status(200).json(shoes);
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
export async function getOneShoes(request, response) {
  try {
    const { id } = request.params;
    const shoes = await Shoes.findById(id);
    if (!shoes) {
      return response.status(400).send({
        message: "Обувь не найдена",
      });
    }
    return response.status(200).json(shoes);
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
export async function updateShoes(request, response) {
  try {
    if (
      shoesParams.checkParams(
        request.body.category,
        request.body.season,
        request.body.gender
      )
    ) {
      const { id } = request.params;
      const result = await Shoes.findByIdAndUpdate(id, request.body);
      if (!result) {
        return response.status(400).send({
          message: "Обувь не найдена",
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
export async function deleteShoes(request, response) {
  try {
    const { id } = request.params;
    const result = await Shoes.findByIdAndDelete(id);
    if (!result) {
      return response.status(400).send({
        message: "Обувь не найдена",
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
