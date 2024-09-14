import Member from "../models/member.model.js";

const getAllMembers = async (req, res) => {
  try {
    const members = await Member.findAll();
    res.status(200).json({
      success: true,
      data: members,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMemberById = async (req, res) => {
  const { id } = req.params;
  try {
    const member = await Member.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      success: true,
      data: member,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const addMember = async (req, res) => {
  const { name, code } = req.body;
  try {
    const newMember = await Member.create({
      name,
      code,
    });
    res.status(201).json({
      success: true,
      message: "Member created successfully",
      data: newMember,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateMember = async (req, res) => {
  const { id } = req.params;
  const { name, code } = req.body;
  try {
    const member = await Member.findOne({
      where: {
        id: id,
      },
    });
    member.name = name;
    member.code = code;
    await member.save();
    res.status(200).json({
      success: true,
      message: "Member updated successfully",
      data: member,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteMember = async (req, res) => {
  const { id } = req.params;
  try {
    const member = await Member.findOne({
      where: {
        id: id,
      },
    });
    await member.destroy();
    res.status(200).json({
      success: true,
      message: "Member deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export { getAllMembers, getMemberById, addMember, updateMember, deleteMember };
