#! /usr/bin/python

from kivymd.app import MDApp
from kivy.lang import Builder

kv = '''    
MDScreen:
    MDSegmentedControl:
        pos_hint: {'center_x': .5, 'center_y': .5}

        MDSegmentedControlItem:
            text: "Python"

'''

class Window(MDApp):
    def build(self):
        return Builder.load_string(kv)

Window().run()