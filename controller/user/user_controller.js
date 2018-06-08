import Model from '../../database/mongodb/model'

export const created = async (req, res, next) => {
  let nickName = req.body.nickName
  let role = req.body.role
  let age = req.body.age
  if (!nickName) return next(400, '缺小必要参数')
  let params = {
    nickName: nickName,
    role: role,
    age: age
  }
  let user = await Model.User.create(params).catch(err => false)
  if (!user) return next(403, '创建失败')
  return res.send(user)
}

export const getById = async () => {
  let uid = req.params.uid
  let user = await Model.User.findById(uid)
  if (!user) return next(403, '用户不存在')
  return res.send(user)
}