import { Ppe } from "../models/ppeModel.js";
import { getDateInFormat } from "../utils/dateFormat.js";
import { ppeParams } from "../utils/validParams.js";

export async function createPpe(request, response) {
  try {
    if (ppeParams.checkParams(request.body.category)) {
      const newPpe = {
        name: request.body.name || "Пусто",
        price: request.body.price || "Пусто",
        standard: request.body.standard || "Пусто",
        series: request.body.series || "Пусто",
        veryfied: request.body.veryfied || "Пусто",
        averageVolume: request.body.averageVolume || "Пусто",
        averageWeight: request.body.averageWeight || "Пусто",
        category: request.body.category,
        mainImg: request.body.mainImg || "Пусто",
        allImages: request.body.allImages || [],
        date: getDateInFormat(),
      };

      const ppe = await Ppe.create(newPpe);

      return response.status(200).send({
        message: "СИЗ успешно добавлен",
        ppe,
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
export async function getPpe(request, response) {
  try {
    const ppe = await Ppe.find({});
    return response.status(200).json(ppe);
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
export async function getOnePpe(request, response) {
  try {
    const { id } = request.params;
    const ppe = await Ppe.findById(id);
    if (!ppe) {
      return response.status(400).send({
        message: "СИЗ не найден",
      });
    }
    return response.status(200).json(ppe);
  } catch (error) {
    return response.status(500).send({
      message: error.message,
    });
  }
}
export async function updatePpe(request, response) {
  try {
    if (ppeParams.checkParams(request.body.category)) {
      const { id } = request.params;
      const result = await Ppe.findByIdAndUpdate(id, request.body);
      if (!result) {
        return response.status(400).send({
          message: "СИЗ не найден",
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
export async function deletePpe(request, response) {
  try {
    const { id } = request.params;
    const result = await Ppe.findByIdAndDelete(id);
    if (!result) {
      return response.status(400).send({
        message: "СИЗ не найден",
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
