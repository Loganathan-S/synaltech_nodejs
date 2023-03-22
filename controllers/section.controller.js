const dbSynalTech  = require('./../models');
const {Op}         = require("sequelize");
const sectionModel = dbSynalTech.Sections;


exports.newSection = async (req, res) => {

    try {
        const _section = await sectionModel.create({
                                                    section     : req.body.section
                                                });
        return res.json(_section);
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.sectionList = async (req, res) => {
    try
    {
        const _sections = await sectionModel.findAll();
        return res.json(_sections);
    } catch (e) {
        return res.status(400).json(null)
    }
}


exports.updateSection = async (req, res) => {
    try {
        const _section = await sectionModel.findOne({where: {id: req.params?.id || -1}});
        if (_section) {
            await _section.update({
                                      section     : req.body.section
                               });
        }
        return res.json(_section);
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.deleteSection = async (req, res) => {
    try {
        const _section = await sectionModel.findOne({where: {id: req.params?.id || -1}});
        if (_section) {
            await sectionModel.destroy({where: {id: req.params?.id || -1}});
        }
        return res.json({status: 'ok'});
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.section = async (req, res) => {
    try
    {
        const _zones = await sectionModel.findOne({where: {id: req.params?.id || -1}});
        return res.json(_zones);
    } catch (e) {
        return res.status(400).json(null)
    }
}
