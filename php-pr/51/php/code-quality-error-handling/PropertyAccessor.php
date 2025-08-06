<?php

class PropertyAccessor
{
    public function getProperty($object, $property)
    {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        try {
            return $object->$property;
        } catch (Exception $e) {
            // Silent failure
        }
        // {/fact}
    }
}