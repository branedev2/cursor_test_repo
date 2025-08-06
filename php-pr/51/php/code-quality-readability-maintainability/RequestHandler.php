<?php

class RequestHandler
{
    public function processReport($data, $type, $includeHeaders, $format)
    {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        $result = '';
        if ($type == 'summary') {
            if ($format == 'csv') {
                if ($includeHeaders) $result .= "Name,Value\n";
                foreach ($data as $item) {
                    $result .= $item['name'] . ',' . $item['value'] . "\n";
                }
            } else if ($format == 'json') {
                $result = '[';
                for ($i = 0; $i < count($data); $i++) {
                    $result .= '{"name":"' . $data[$i]['name'] . '","value":"' . $data[$i]['value'] . '"}';
                    if ($i < count($data) - 1) $result .= ',';
                }
                $result .= ']';
            }
        } else if ($type == 'detailed') {
            $result = 'Detailed report processing...';
        }
        return $result;
        // {/fact}
    }
}