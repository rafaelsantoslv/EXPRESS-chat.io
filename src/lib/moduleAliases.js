const moduleAlias = require('module-alias');
const moduleAliasConfig = require('../config/moduleAliases');

console.log(moduleAliasConfig)
// Adicione os aliases definidos na configuração
moduleAlias.addAliases(moduleAliasConfig);
