import  cdt  from '../models/cdt.models.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createCdt = async (req, res, next) => {
  const { personalInfo,calculate } = req.body;
  try {
     const cdtInfo = await cdt.create({
     personalInfo,
     calculate,
    });
    return res.status(200).send(cdtInfo);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    next(error);
  }
};
export default createCdt;
