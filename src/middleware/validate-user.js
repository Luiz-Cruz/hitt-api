import Joi from 'joi';
import { cpf } from 'cpf-cnpj-validator';

const userSchema = Joi.object({
    type: Joi.string().valid('STARTUP', 'PARCEIRO', 'VISITANTE').required(),
    register_code: Joi.string().optional().allow(''),
    full_name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    tax_id: Joi.string().required().custom((value, helpers) => {
        if (!cpf.isValid(value)) {
            return helpers.message('Invalid tax id');
        }
        return value;
    }),
    birthday: Joi.date().iso().required(),
    gender: Joi.string().valid('MASCULINO', 'FEMININO', 'NAO_INFORMAR').required(),
    where_from: Joi.string().required().valid('GOOGLE', 'FACEBOOK', 'INSTAGRAM', 'LINKEDIN', 'SITE', 'INDICACAO', 'OUTROS'),
    newsletter: Joi.boolean().required(),
});

export function validateUser(req, res, next) {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}
