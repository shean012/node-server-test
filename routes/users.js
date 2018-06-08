let express = require('express');
let router = express.Router();

import * as User from '../controller/user/user_controller'

router.post('/create', User.created)
router.get('/:uid', User.getById)


module.exports = router;
