const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetEventVar
	];
};
self.C3_JsPropNameTable = [
	{CentrarEm: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{Personagem: 0},
	{Sólido: 0},
	{blocos: 0},
	{chave: 0},
	{Porta: 0},
	{lava: 0},
	{chaves: 0}
];

self.InstanceType = {
	Personagem: class extends self.ISpriteInstance {},
	blocos: class extends self.ISpriteInstance {},
	chave: class extends self.ISpriteInstance {},
	Porta: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {}
}