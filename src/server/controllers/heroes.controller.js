import Hero from '../models/hero.model';

function load(req, res, next, id) {
  Hero.get(id)
    .then((hero) => {
      req.hero = hero; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

function get(req, res) {
  return res.json(req.hero);
}

function create(req, res, next) {
  const hero = new Hero({
    name: req.body.name,
  });

  hero.save()
    .then(savedHero => res.json(savedHero))
    .catch(e => next(e));
}

function update(req, res, next) {
  const hero = req.hero;
  hero.username = req.body.name;
  hero.save()
    .then(savedHero => res.json(savedHero))
    .catch(e => next(e));
}

function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Hero.list({ limit, skip })
    .then(heroes => res.json(heroes))
    .catch(e => next(e));
}

function remove(params) {
  return load(params).then(hero => hero.remove());
}

export default { load, get, create, update, list, remove };
