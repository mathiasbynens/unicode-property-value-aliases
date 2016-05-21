import test from 'ava';
import propertyValueAliases from '../index.js';

test(t => {
	t.is(
		propertyValueAliases.get('ASCII_Hex_Digit').get('N'),
		'No'
	);
	t.is(
		propertyValueAliases.get('Age').get('1.1'),
		'V1_1'
	);
	t.is(
		propertyValueAliases.get('Alphabetic').get('False'),
		'No'
	);
	t.is(
		propertyValueAliases.get('Bidi_Class').get('AL'),
		'Arabic_Letter'
	);
	t.is(
		propertyValueAliases.get('Bidi_Control').get('T'),
		'Yes'
	);
	t.is(
		propertyValueAliases.get('Block').get('Alphabetic_PF'),
		'Alphabetic_Presentation_Forms'
	);
	t.is(
		propertyValueAliases.get('Canonical_Combining_Class').get('KV'),
		'Kana_Voicing'
	);
});
