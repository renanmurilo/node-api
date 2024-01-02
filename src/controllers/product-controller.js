'use strict';

const repository = require('../repositories/product-repository')

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send({
      message: 'Falha ao processar sua requisição!',
      data: e
    });
  }
}

exports.getBySlug = async (req, res, next) => {
  try {
    var data = await repository.getBySlug(req.params.slug);
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send({
      message: 'Falha ao processar sua requisição!',
      data: e
    });
  }
}

exports.getById = async (req, res, next) => {
  try {
    var data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send({
      message: 'Falha ao processar sua requisição!',
      data: e
    });
  }
}

exports.getByTag = async (req, res, next) => {
  try {
    var data = await repository.getByTag(req.params.tag);
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send({
      message: 'Falha ao processar sua requisição!',
      data: e
    });
  }
}

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(201).send({ message: 'Produto cadastrado com sucesso' });
  } catch (e) {
    res.status(400).send({
      message: 'Falha ao cadastrar o produto!',
      data: e
    });
  }
}

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(201).send({ message: 'Produto atualizado com sucesso!' });
  } catch (e) {
    res.status(400).send({ message: 'Falha ao atualizar o produto', data: e })
  }
}

exports.remove = async (req, res, next) => {
  try {
    await repository.remove(req.body.id);
    res.status(201).send({ message: 'Produto removido com sucesso!' });
  } catch (e) {
    res.status(400).send({ message: 'Falha ao remover o produto', data: e })
  }
}