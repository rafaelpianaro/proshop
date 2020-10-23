import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@admin.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true
	},
	{
		name: 'João Silva',
		email: 'joao@joao.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Maria Silva',
		email: 'maria@maria.com',
		password: bcrypt.hashSync('123456', 10),
	},
]

export default users