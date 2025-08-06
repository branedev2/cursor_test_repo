<?php

class SafePropertyAccessor
{
    public function getProperty($object, $property)
    {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!is_object($object)) {
            throw new InvalidArgumentException("First argument must be an object");
        }

        if (!property_exists($object, $property)) {
            throw new InvalidArgumentException("Property '{$property}' does not exist");
        }

        return $object->$property;
        // {/fact}
    }
}