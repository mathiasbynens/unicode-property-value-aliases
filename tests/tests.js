import test from 'ava';
import propertyValueAliases from '../index.js';

test(t => {
	t.is(
		propertyValueAliases.get('General_Category').get('L'),
		'Letter'
	);
	t.is(
		propertyValueAliases.get('General_Category').get('Lu'),
		'Uppercase_Letter'
	);
	t.is(
		propertyValueAliases.get('General_Category').get('C'),
		'Other'
	);
	t.is(
		propertyValueAliases.get('General_Category').get('Cn'),
		'Unassigned'
	);
	t.is(
		propertyValueAliases.get('Script').get('Aghb'),
		'Caucasian_Albanian'
	);
	t.is(
		propertyValueAliases.get('Script_Extensions').get('Aghb'),
		'Caucasian_Albanian'
	);
});
