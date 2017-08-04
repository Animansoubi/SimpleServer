<div class="container">

# Swagger simpleServer

Base URL: <span class="sw-info-basePath">/v2</span>, Version: <span class="sw-info-version">1.0.0</span>

This is a sample server. For this sample, you can use the 4 api that create models and insert into models and get list of documantion and filter that.

<div id="sw-schemes" class="sw-default-value"><span class="sw-default-value-header">Schemes:</span> http</div>

## Summary

### Tag: pet

<table class="table table-bordered table-condensed swagger--summary">

<thead>

<tr>

<th>Operation</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>[POST /model](#operation--model-post)</td>

<td>

Add a new pet to the store

</td>

</tr>

<tr>

<td>[POST /insert/{model}](#operation--insert--model--post)</td>

<td>

Add a new pet to the store

</td>

</tr>

</tbody>

</table>

### Tag: default

<table class="table table-bordered table-condensed swagger--summary">

<thead>

<tr>

<th>Operation</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>[GET /list/{model}](#operation--list--model--get)</td>

</tr>

<tr>

<td>[GET /filter/{model}/{key}/{value}](#operation--filter--model---key---value--get)</td>

</tr>

</tbody>

</table>

## Paths

<span id="path--filter--model---key---value-"></span>

<div id="operation--filter--model---key---value--get" class="swagger--panel-operation-get panel">

<div class="panel-heading">

### <span class="operation-name">GET</span> **/filter/{model}/{key}/{value}**

</div>

<div class="panel-body">

<section class="sw-request-params">

<table class="table">

<thead></thead>

<tbody>

<tr>

<td>model</td>

<td>path</td>

<td><span class="json-property-type">string</span><span class="json-property-range" title="Value limits"></span></td>

<td><span class="json-property-required"></span></td>

</tr>

<tr>

<td>key</td>

<td>path</td>

<td><span class="json-property-type">string</span><span class="json-property-range" title="Value limits"></span></td>

<td><span class="json-property-required"></span></td>

</tr>

<tr>

<td>value</td>

<td>path</td>

<td><span class="json-property-type">string</span><span class="json-property-range" title="Value limits"></span></td>

<td><span class="json-property-required"></span></td>

</tr>

</tbody>

</table>

</section>

<section class="sw-responses">

<dl>

<dt class="sw-response-200">200 OK</dt>

<dd class="sw-response-200">

<div class="row">

<div class="col-md-12">

Success/Error Message

</div>

</div>

<div class="row">

<div class="col-md-6 sw-response-model">

<div class="panel panel-definition">

<div class="panel-body">[ResultResponse](#/definitions/ResultResponse)</div>

</div>

</div>

</div>

</dd>

</dl>

</section>

</div>

</div>

<span id="path--insert--model-"></span>

<div id="operation--insert--model--post" class="swagger--panel-operation-post panel">

<div class="panel-heading">

<div class="operation-summary">Add a new pet to the store</div>

### <span class="operation-name">POST</span> **/insert/{model}**

Tags: [pet](#tag-pet)</div>

<div class="panel-body">

<section class="sw-request-body">

<span class="label label-default">application/json</span>

<div class="row">

<div class="col-md-6 sw-request-model">

<div class="panel panel-definition">

<div class="panel-body">[Object](#/definitions/Object)</div>

</div>

</div>

</div>

</section>

<section class="sw-request-params">

<table class="table">

<thead></thead>

<tbody>

<tr>

<td>model</td>

<td>path</td>

<td><span class="json-property-type">string</span><span class="json-property-range" title="Value limits"></span></td>

<td><span class="json-property-required"></span></td>

</tr>

</tbody>

</table>

</section>

<section class="sw-responses">

<span class="label label-default">application/json</span>

<dl>

<dt class="sw-response-200">200 OK</dt>

<dd class="sw-response-200">

<div class="row">

<div class="col-md-12">

Success/Error Message

</div>

</div>

<div class="row">

<div class="col-md-6 sw-response-model">

<div class="panel panel-definition">

<div class="panel-body">[Response](#/definitions/Response)</div>

</div>

</div>

</div>

</dd>

</dl>

</section>

</div>

</div>

<span id="path--list--model-"></span>

<div id="operation--list--model--get" class="swagger--panel-operation-get panel">

<div class="panel-heading">

### <span class="operation-name">GET</span> **/list/{model}**

</div>

<div class="panel-body">

<section class="sw-request-params">

<table class="table">

<thead></thead>

<tbody>

<tr>

<td>model</td>

<td>path</td>

<td><span class="json-property-type">string</span><span class="json-property-range" title="Value limits"></span></td>

<td><span class="json-property-required"></span></td>

</tr>

</tbody>

</table>

</section>

<section class="sw-responses">

<dl>

<dt class="sw-response-200">200 OK</dt>

<dd class="sw-response-200">

<div class="row">

<div class="col-md-12">

Success/Error Message

</div>

</div>

<div class="row">

<div class="col-md-6 sw-response-model">

<div class="panel panel-definition">

<div class="panel-body">[ResultResponse](#/definitions/ResultResponse)</div>

</div>

</div>

</div>

</dd>

</dl>

</section>

</div>

</div>

<span id="path--model"></span>

<div id="operation--model-post" class="swagger--panel-operation-post panel">

<div class="panel-heading">

<div class="operation-summary">Add a new pet to the store</div>

### <span class="operation-name">POST</span> **/model**

Tags: [pet](#tag-pet)</div>

<div class="panel-body">

<section class="sw-request-body">

<span class="label label-default">application/json</span>

<div class="row">

<div class="col-md-6">

Pet object that needs to be added to the store

</div>

<div class="col-md-6 sw-request-model">

<div class="panel panel-definition">

<div class="panel-body">[Model](#/definitions/Model)</div>

</div>

</div>

</div>

</section>

<section class="sw-responses">

<span class="label label-default">application/json</span>

<dl>

<dt class="sw-response-200">200 OK</dt>

<dd class="sw-response-200">

<div class="row">

<div class="col-md-12">

Success/Error Message

</div>

</div>

<div class="row">

<div class="col-md-6 sw-response-model">

<div class="panel panel-definition">

<div class="panel-body">[Response](#/definitions/Response)</div>

</div>

</div>

</div>

</dd>

</dl>

</section>

</div>

</div>

## Schema definitions

<div id="definition-Field" class="panel panel-definition">

<div class="panel-heading">

### <a name="/definitions/Field"></a>Field: <span class="json-property-type"><span class="json-property-type">object</span><span class="json-property-range" title="Value limits"></span></span>

</div>

<div class="panel-body">

<section class="json-schema-properties">

<dl>

<dt data-property-name="name"><span class="json-property-name">name:</span> <span class="json-property-type">string</span><span class="json-property-range" title="Value limits"></span></dt>

<dt data-property-name="required"><span class="json-property-name">required:</span> <span class="json-property-type">boolean</span><span class="json-property-range" title="Value limits"></span></dt>

<dt data-property-name="type"><span class="json-property-name">type:</span> <span class="json-property-type">string</span><span class="json-property-range" title="Value limits"></span></dt>

</dl>

</section>

</div>

</div>

<div id="definition-Fields" class="panel panel-definition">

<div class="panel-heading">

### <a name="/definitions/Fields"></a>Fields: <span class="json-property-type"><span class="json-property-type">object[]</span><span class="json-property-range" title="Value limits"></span></span>

</div>

<div class="panel-body">

<section class="json-schema-array-items"><span class="json-property-type">[Field](#/definitions/Field)</span><span class="json-property-range" title="Value limits"></span></section>

</div>

</div>

<div id="definition-Model" class="panel panel-definition">

<div class="panel-heading">

### <a name="/definitions/Model"></a>Model: <span class="json-property-type"><span class="json-property-type">object</span><span class="json-property-range" title="Value limits"></span></span>

</div>

<div class="panel-body">

<section class="json-schema-properties">

<dl>

<dt data-property-name="name"><span class="json-property-name">name:</span> <span class="json-property-type">string</span><span class="json-property-range" title="Value limits"></span></dt>

<dt data-property-name="fields"><span class="json-property-name">fields:</span> <span class="json-property-type">[Fields](#/definitions/Fields)</span><span class="json-property-range" title="Value limits"></span></dt>

</dl>

</section>

</div>

</div>

<div id="definition-Object" class="panel panel-definition">

<div class="panel-heading">

### <a name="/definitions/Object"></a>Object: <span class="json-property-type"><span class="json-property-type">object</span><span class="json-property-range" title="Value limits"></span></span>

</div>

</div>

<div id="definition-Response" class="panel panel-definition">

<div class="panel-heading">

### <a name="/definitions/Response"></a>Response: <span class="json-property-type"><span class="json-property-type">object</span><span class="json-property-range" title="Value limits"></span></span>

</div>

<div class="panel-body">

<section class="json-schema-properties">

<dl>

<dt data-property-name="code"><span class="json-property-name">code:</span> <span class="json-property-type">integer</span> <span class="json-property-format">(int32)</span><span class="json-property-range" title="Value limits"></span></dt>

<dt data-property-name="message"><span class="json-property-name">message:</span> <span class="json-property-type">string</span><span class="json-property-range" title="Value limits"></span></dt>

</dl>

</section>

</div>

</div>

<div id="definition-Result" class="panel panel-definition">

<div class="panel-heading">

### <a name="/definitions/Result"></a>Result: <span class="json-property-type"><span class="json-property-type">object[]</span><span class="json-property-range" title="Value limits"></span></span>

</div>

<div class="panel-body">

<section class="json-schema-array-items"><span class="json-property-type">[Object](#/definitions/Object)</span><span class="json-property-range" title="Value limits"></span></section>

</div>

</div>

<div id="definition-ResultResponse" class="panel panel-definition">

<div class="panel-heading">

### <a name="/definitions/ResultResponse"></a>ResultResponse: <span class="json-property-type"><span class="json-property-type">object</span><span class="json-property-rnge" title="Value limits"></span></span>

</div>

<div class="panel-body">

<section class="json-schema-properties">

<dl>

<dt data-property-name="code"><span class="json-property-name">code:</span> <span class="json-property-type">integer</span> <span class="json-property-format">(int32)</span><span class="json-property-range" title="Value limits"></span></dt>

<dt data-property-name="result"><span class="json-property-name">result:</span> <span class="json-property-type">object[]</span><span class="json-property-range" title="Value limits"></span></dt>

<dd>

<div class="json-inner-schema">

<section class="json-schema-array-items"><span class="json-property-type">[Result](#/definitions/Result)</span><span class="json-property-range" title="Value limits"></span></section>

</div>

</dd>

</dl>

</section>

</div>

</div>

</div>

