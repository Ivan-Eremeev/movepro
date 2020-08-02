//= jquery-3.2.1.min.js
$(document).ready(function () {
	var modelSelect = $('#model-select input'),
		gopro = $('#form-gopro'),
		dgi = $('#form-dgi'),
		stedi = $('#form-stedi');

	modelSelect.change(function() {
		gopro.addClass('form-hidden');
		dgi.addClass('form-hidden');
		stedi.addClass('form-hidden');
		gopro.removeClass('form-visible');
		dgi.removeClass('form-visible');
		stedi.removeClass('form-visible');
		if ($('#model-select input[value=1]').prop('checked')) {
			gopro.removeClass('form-hidden');
			gopro.addClass('form-visible');
		}
		else if ($('#model-select input[value=2]').prop('checked')) {
			dgi.removeClass('form-hidden');
			dgi.addClass('form-visible');
		}
		else if ($('#model-select input[value=3]').prop('checked')) {
			stedi.removeClass('form-hidden');
			stedi.addClass('form-visible');
		}
	});

	var goproSelect = $('#form-gopro input'),
		modelItemAfter = $('#model-item-after img'),
		modelItemBefore = $('#model-item-before img'),
		goproChecked = $('#form-gopro input:checked'),
		goproImgBefore,
		goproImgAfter;
	goproSelect.change(function() {
		goproChecked = $('#form-gopro input:checked');
		goproImgBefore = goproChecked.attr('data-img-before'),
		goproImgAfter = goproChecked.attr('data-img-after');
		modelItemBefore.attr('src', goproImgBefore);
		modelItemAfter.attr('src', goproImgAfter);
	});

	var dgiSelect = $('#form-dgi input'),
		modelItemAfter = $('#model-item-after img'),
		modelItemBefore = $('#model-item-before img'),
		dgiChecked = $('#form-dgi input:checked'),
		dgiImgBefore,
		dgiImgAfter;
	dgiSelect.change(function() {
		dgiChecked = $('#form-dgi input:checked');
		dgiImgBefore = dgiChecked.attr('data-img-before'),
		dgiImgAfter = dgiChecked.attr('data-img-after');
		modelItemBefore.attr('src', dgiImgBefore);
		modelItemAfter.attr('src', dgiImgAfter);
	});

	var stediSelect = $('#form-stedi input'),
		modelItemAfter = $('#model-item-after img'),
		modelItemBefore = $('#model-item-before img'),
		stediChecked = $('#form-stedi input:checked'),
		stediImgBefore,
		modelItemAfter;
	stediSelect.change(function() {
		stediChecked = $('#form-stedi input:checked');
		stediImgBefore = stediChecked.attr('data-img-before'),
		stediImgAfter = stediChecked.attr('data-img-after');
		modelItemBefore.attr('src', stediImgBefore);
		modelItemAfter.attr('src', stediImgAfter);
	});

	modelSelect.click(function() {
		if ($(this).attr('value') == '1') {
			goproImgBefore = goproChecked.attr('data-img-before'),
			goproImgAfter = goproChecked.attr('data-img-after');
			modelItemBefore.attr('src', goproImgBefore);
			modelItemAfter.attr('src', goproImgAfter);
		}
		else if ($(this).attr('value') == '2') {
			dgiImgBefore = dgiChecked.attr('data-img-before'),
			dgiImgAfter = dgiChecked.attr('data-img-after');
			modelItemBefore.attr('src', dgiImgBefore);
			modelItemAfter.attr('src', dgiImgAfter);
		}
		else if ($(this).attr('value') == '3') {
			stediImgBefore = stediChecked.attr('data-img-before'),
			stediImgAfter = stediChecked.attr('data-img-after');
			modelItemBefore.attr('src', stediImgBefore);
			modelItemAfter.attr('src', stediImgAfter);
		}
	});

});