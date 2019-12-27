let db = require('../models')

module.exports.insert = async function (data) {
    await db.promotion.upsert({
        promotion_id: data.promotion_id,
        detail: data.detail,
        date_start: data.date_start,
        date_end: data.date_end,
        discount_percent: data.discount_percent,
    })
}

module.exports.getPromotion = async function () {
    return await db.promotion.findAll()
}

module.exports.deletePromotion = async function (id) {
    return await db.promotion.destroy({ where: { promotion_id: id } })
}